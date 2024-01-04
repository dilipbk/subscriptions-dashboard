import { useEffect, useState } from "react";

type subsData = {
  id: string;
  user_id: string;
  package: string;
  expires_on: Date;
};

export const useDataCount = (data: []) => {
  const currentDate: number = new Date("2021-07-03 08:16:28").getTime();

  const [plansCount, setPlansCount] = useState(0);
  const [subscribersCount, setSubscribersCount] = useState(0);
  const [expiredCount, setExpiredCount] = useState(0);

  useEffect(() => {
    setPlansCount(
      () =>
        Array.from(new Set(data?.map((data: subsData) => data.package))).length
    );

    setSubscribersCount(
      () =>
        Array.from(new Set(data?.map((data: subsData) => data.user_id))).length
    );

    setExpiredCount(
      () =>
        data?.filter(
          (item: subsData) =>
            currentDate - new Date(item.expires_on).getTime() > 0
        ).length
    );
  }, [data]);

  return { plansCount, subscribersCount, expiredCount };
};
