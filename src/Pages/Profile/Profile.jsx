import React from "react";
import ProfilePhoto from "../../Compnents/Profile/ProfilePhoto";
import HeaderPhoto from "../../Compnents/HeaderPhoto/HeaderPhoto";
import { Container } from "react-bootstrap";
import ProfileInfo from "../../Compnents/Profile/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <HeaderPhoto imageUrl={"../../../assets/actfakr1.png"} />
      <Container fluid="lg">
        <ProfilePhoto />
        <ProfileInfo/>
      </Container>
    </div>
  );
};

export default Profile;
