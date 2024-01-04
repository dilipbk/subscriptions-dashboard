import { useEffect, useState } from "react";
import useDataSelector from "../../common/hooks/useDataSelector";
import { useSelector } from "react-redux";

const Subscriptions = () => {
  const [subscriptionPlans, setSubscriptionPlans] = useState([]);

  const { selectSubscriptionPlans } = useDataSelector();
  const status = useSelector((state) => state.subscriptions.status);

  useEffect(() => {
    setSubscriptionPlans(selectSubscriptionPlans());
  }, [status]);

  console.log(subscriptionPlans);

  return (
    <div className="container">
      <div className="subscription-packages bg-white">
        <div className="title">
          <h4 className="font-medium">Subscribed Packages</h4>
        </div>
        <div className="packages-container">
          {subscriptionPlans.map(({ plan, usersCount }) => (
            <div key={plan} className="package-box flex gap-2">
              <div className="package flex gap-0_5">
                <div className="label">Package: </div>
                <span>{plan}</span>
              </div>
              <div className="expire-date flex gap-0_5">
                <div className="label">Total Subscribers: </div>
                <span>{usersCount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
