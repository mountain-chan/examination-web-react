import { useDispatch } from "react-redux";
import Button from "../components/UI/Button";
import { authActions, timerActions } from "../store";
import "./Home.css";
import GoogleLogin from "react-google-login";
import { UserModel } from "../models";

const Home: React.FC = (props) => {
  const dispatch = useDispatch();

  const onClickBtnHandler = () => {
    dispatch(timerActions.updateRunning(true));
  };

  const responseGoogle = (response: any) => {
    const userProfile = response.profileObj;
    if (userProfile) {
      const userInfo: UserModel = {
        email: userProfile.email,
        name: userProfile.name,
        imageUrl: userProfile.imageUrl,
        point: 0,
        timeSpend: 0,
      };
      dispatch(authActions.updateAuth(userInfo));
      onClickBtnHandler();
    }
  };

  return (
    <div className="Home-wrapper">
      <p>
        <span>Chú ý:</span>
      </p>
      {/* <p>
        - Trang web sẽ bật <span>chế độ toàn màn hình</span> trong lúc thi, việc thoát khỏi chế độ toàn màn hình là{" "}
        <span>vi phạm quy chế thi</span>
      </p> */}
      <p>
        - Sau khi nhấn <span>"Nộp bài"</span>, bài thi kết thúc và bạn sẽ <span>không thể sửa bài thi</span> nữa
      </p>
      <p> Thời gian làm bài thi có hạn, chú ý thời gian hợp lý cho mỗi câu để đạt kết quả tốt nhất.</p>

      <div className="centered Home-wrapper-actions">
        <div className="Home-wrapper-btn">
          <Button disabled={false} className="greenBtn" onClick={onClickBtnHandler}>
            Bắt đầu thi
          </Button>
        </div>

        <div>hoặc</div>

        <div className="Home-wrapper-btn">
          <GoogleLogin
            clientId="932731658185-s80k0demqn8gr9tfvbnar3fk8l5el9l8.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className="greenBtn" onClick={renderProps.onClick}>
                Bắt đầu với tài khoản Google
              </Button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
