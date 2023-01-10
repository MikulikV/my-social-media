import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, getUsers } from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChange = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users {...this.props} onPageChange={this.onPageChange} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    usersTotalCount: state.usersPage.usersTotalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};


export default connect( mapStateToProps, { follow, unfollow, getUsers })(UsersContainer);

