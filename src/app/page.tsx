import Home from "./pages/home/page";
import { ApiProps } from "./types";
interface DummyApi {
  posts: ApiProps[];
}
export default function App() {
  return (
      <Home />
  );
}
