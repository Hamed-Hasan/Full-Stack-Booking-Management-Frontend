import { tagTypes } from "@/redux/tag-types";
import { baseApi } from "../baseApi";
import { IMeta, IService } from "@/types";

const CAR_SERVICE_URL = "/services";

export const carServiceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all car service
    carServices: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: CAR_SERVICE_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IService[], meta: IMeta) => {
        return {
          carServices: response,
          meta,
        };
      },
      providesTags: [tagTypes.service],
    }),
    // get single car service
    carService: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${CAR_SERVICE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),
    // create a new car service
    addCarService: build.mutation({
      query: (data) => ({
        url: CAR_SERVICE_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    // update car service
    updateCarService: build.mutation({
      query: (data) => ({
        url: `${CAR_SERVICE_URL}/${data.id}`,
        method: "PUT",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.service],
    }),

    // delete car service
    deleteCarService: build.mutation({
      query: (id) => ({
        url: `${CAR_SERVICE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useAddCarServiceMutation,
  useCarServicesQuery,
  useCarServiceQuery,
  useUpdateCarServiceMutation,
  useDeleteCarServiceMutation,
} = carServiceApi;
