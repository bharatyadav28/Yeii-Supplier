import { set } from "date-fns";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

function useHttp() {
  const [isLoading, setIsLoading] = useState(false);

  const dbConnect = async (actionFun) => {
    setIsLoading(true);
    const response = await actionFun();
    setIsLoading(false);

    if (response && !response?.success) {
      toast.error(response.message);
    }
    return response;
  };
  return {
    isLoading,
    dbConnect,
    setIsLoading,
  };
}

export default useHttp;
