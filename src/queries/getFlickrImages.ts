import axios from "axios";
const _API_KEY = "3f25176d6dfe7531e3f98c38ddecffc1";

export interface IOwnerModel {
  id: string;
  name: string;
}

export interface IPhotoModel {
  id: string;
  title: string;
  description: string;
  owner: IOwnerModel;
  height: string;
  width: string;
  tags: string;
  thumbnailUrl: string;
}

export interface IResponseModel {
  page: number;
  pages: number;
  perpage: number;
  photos: IPhotoModel[];
  total: number;
}

export interface IRequestModel {
    text: string;
    page: number;
    perPage: number;
}

export const getFlickrImages = async (props: IRequestModel) => {
  try {
    const response = await axios.get(
      "https://www.flickr.com/services/rest/?method=flickr.photos.search",
      {
        params: {
          api_key: _API_KEY,
          extras: "owner_name,url_s,description,tags",
          format: "json",
          nojsoncallback: "1",
          page: props.page ? props.page : 1,
          per_page: props.perPage ? props.perPage : 20,
          safe_search: 1,
          sort: "relevance",
          text: props.text ? props.text : "",
        },
      },
    );
    return constructResponse(response.data);
  } catch (error) {
    return error;
  }
};

const constructResponse = (data: any): IResponseModel => {
  const dataModel = {
    page: 0,
    pages: 0,
    perpage: 0,
    photos: constructPhotosModel(data.photos),
    total: 0,
  };

  if (typeof data.photos !== "undefined") {
    if (data.photos.page) {
      dataModel.page = data.photos.page;
    }

    if (data.photos.pages) {
      dataModel.pages = data.photos.pages;
    }

    if (data.photos.perpage) {
      dataModel.perpage = data.photos.perpage;
    }

    if (data.photos.total) {
      dataModel.total = data.photos.total;
    }
  }

  return dataModel;
};

const constructPhotosModel = (photos: any): IPhotoModel[] => {
  let photoModel = null;
  if (photos && photos.photo) {
    photoModel = photos.photo.map(
      (item: any): IPhotoModel => {
        const photo = {
          description: "",
          height: item.height_s ? item.height_s : "",
          id: item.id ? item.id : "",
          owner: {
            id: "",
            name: "",
          },
          tags: item.url_s ? item.tags : "",
          thumbnailUrl: item.url_s ? item.url_s : "",
          title: item.title ? item.title : "",
          width: item.width_s ? item.width_s : "",
        };
        if (item.description && item.description._content) {
          photo.description = item.description._content;
        }

        if (item.ownername && item.owner) {
          photo.owner = {
            id: item.owner,
            name: item.ownername,
          };
        }
        return photo;
      },
    );
  }
  return photoModel;
};
