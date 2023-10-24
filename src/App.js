import React from 'react';
import {CarContainer} from "./components/CarContainer/CarContainer";
import {UserContainer} from "./components/UserContainer/UserContainer";
import {CommentContainer} from "./components/CommentContainer/CommentContainer";

const App = () => {
    return (
        <div>
          <CarContainer/>
          {/*  <UserContainer/>*/}
          {/*  <CommentContainer/>*/}
        </div>
    );
};

export {App};