import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { DdddsList } from "./dddds/DdddsList";
import { DdddsCreate } from "./dddds/DdddsCreate";
import { DdddsEdit } from "./dddds/DdddsEdit";
import { DdddsShow } from "./dddds/DdddsShow";
import { RoomList } from "./room/RoomList";
import { RoomCreate } from "./room/RoomCreate";
import { RoomEdit } from "./room/RoomEdit";
import { RoomShow } from "./room/RoomShow";
import { WhysList } from "./whys/WhysList";
import { WhysCreate } from "./whys/WhysCreate";
import { WhysEdit } from "./whys/WhysEdit";
import { WhysShow } from "./whys/WhysShow";
import { TttList } from "./ttt/TttList";
import { TttCreate } from "./ttt/TttCreate";
import { TttEdit } from "./ttt/TttEdit";
import { TttShow } from "./ttt/TttShow";
import { AaaList } from "./aaa/AaaList";
import { AaaCreate } from "./aaa/AaaCreate";
import { AaaEdit } from "./aaa/AaaEdit";
import { AaaShow } from "./aaa/AaaShow";
import { BbbbList } from "./bbbb/BbbbList";
import { BbbbCreate } from "./bbbb/BbbbCreate";
import { BbbbEdit } from "./bbbb/BbbbEdit";
import { BbbbShow } from "./bbbb/BbbbShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"fds"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Dddds"
          list={DdddsList}
          edit={DdddsEdit}
          create={DdddsCreate}
          show={DdddsShow}
        />
        <Resource
          name="Room"
          list={RoomList}
          edit={RoomEdit}
          create={RoomCreate}
          show={RoomShow}
        />
        <Resource
          name="Whys"
          list={WhysList}
          edit={WhysEdit}
          create={WhysCreate}
          show={WhysShow}
        />
        <Resource
          name="Ttt"
          list={TttList}
          edit={TttEdit}
          create={TttCreate}
          show={TttShow}
        />
        <Resource
          name="Aaa"
          list={AaaList}
          edit={AaaEdit}
          create={AaaCreate}
          show={AaaShow}
        />
        <Resource
          name="Bbbb"
          list={BbbbList}
          edit={BbbbEdit}
          create={BbbbCreate}
          show={BbbbShow}
        />
      </Admin>
    </div>
  );
};

export default App;
