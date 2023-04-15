import { ProfileCard } from "./ProfileCard/ProfileCard";
import user from "../user.json";
import {Div} from './App.styled'

export const App = () => {
  return (
    <Div>
      <ProfileCard item={user} />
    </Div>
  );
};

