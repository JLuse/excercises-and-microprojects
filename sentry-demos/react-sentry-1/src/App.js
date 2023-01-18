import ProfileCard from "./ProfileCard"

function App() {
  
  function sayHello() {
    console.log('hello')
  };

  return (
    <div>
      <div>Header for this Digital Voice Thang</div>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <button onClick={sayHello}>Click me!</button>
    </div>
  );
}

export default App;