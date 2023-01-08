import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";


// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let params = useParams();
    return (
        <Component
            {...props}
            match={{ params }}
        />
    );
  }
  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
      )
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <Profile {...this.props} />
    );
  }
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
