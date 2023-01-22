import ProfileCard from "./ProfileCard"

function App() {
  
  function releaseMe() {
    throw new Error('this is a trggered error');
  };

  return (
    <div>
      <div>Header for this Digital Voice Thang</div>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <button onClick={releaseMe}>Click me!</button>
    </div>
  );
}

export default App;