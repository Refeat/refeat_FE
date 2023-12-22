// "use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetDiary = () => {
  const { data: diary, isError } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const data = await axios.get("/diary", {
        params: {},
      });
      return data.data.data;
    },
  });

  return { diary, isError };
};
