import { useParams } from "react-router-dom";
import {
  useGetSubscriptionByUserQuery,
  useGetUserByIdQuery,
} from "../../api/apiSlice";
import Loading from "../../common/components/Placeholder/Loading";
import Error from "../../common/components/Placeholder/Error";
const UserDetail = () => {
  const { userId } = useParams();

  const {
    data: user,
    isLoading: userLoading,
    isFetching: userFetching,
    isError: userError,
  } = useGetUserByIdQuery(userId);

  const {
    data: subscription,
    isLoading: subLoading,
    isFetching: subFetching,
    isError: subError,
  } = useGetSubscriptionByUserQuery(userId);

  console.log(subscription);

  return (
    <div className="user-detail__container">
      <div className="container">
        {userLoading && userFetching && (
          <div className="loading">
            <div className="loader"></div>
          </div>
        )}
        {user && (
          <div className="personal-info bg-white">
            <div className="title">
              <h4 className="font-medium">Personal Information</h4>
            </div>
            <div className="detailed-info flex wrap items-center gap-1_5">
              {Object.keys(user).map((key, index) => (
                <div key={index} className="detail-box">
                  <div className="label">{key}</div>
                  <div className="data">{user[key]}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {subLoading && subFetching && (
          <div className="loading">
            <div className="loader"></div>
          </div>
        )}
        {subscription && (
          <div className="subscribed-packages bg-white">
            <div className="title">
              <h4 className="font-medium">Subscribed Packages</h4>
            </div>
            <div className="packages-container">
              {!subscription.length ? (
                <p>No subscribed packages</p>
              ) : (
                subscription.map((sub) => (
                  <div key={sub.id} className="package-box flex gap-2">
                    <div className="package flex gap-0_5">
                      <div className="label">Package: </div>
                      <span>{sub.package}</span>
                    </div>
                    <div className="expire-date flex gap-0_5">
                      <div className="label">Expires on: </div>
                      <span>{sub.expires_on}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
