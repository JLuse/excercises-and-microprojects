import ProfileCard from "./ProfileCard"

function App() {
  
  function sayMello() {
    throw new Error('you have throw an error again');
  };

  return (
    <div>
      <div>Header for this Digital Voice Thang</div>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <button onClick={sayMello}>Click me!</button>
    </div>
  );
}

export default App;