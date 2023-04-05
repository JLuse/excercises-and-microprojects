import ProfileCard from "./ProfileCard"

function App() {
  
  function releaseMe1() {
    throw new Error('this is a trggered error3');
  };

  return (
    <div>
      <div>Header for this Digital Voice Thang</div>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <button onClick={releaseMe1}>Click me!</button>
    </div>
  );
}

export default App;