import ProfileCard from "./ProfileCard"

function App() {
  
  function releaseMe() {
    throw new Error('this is a trggered error1');
  };

  // const fetch = async () => {
  //   const response = await fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png")
  //   .then((response) => response.blob())
  //   .then(imageBlob => {
  //     // Then create a local URL for that image and print it 
  //     const imageObjectURL = URL.createObjectURL(imageBlob);
  //     console.log(imageObjectURL);
  // });
  // return response
  // }

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