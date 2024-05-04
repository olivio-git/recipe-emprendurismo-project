export const H1 = ({text}) => {

  return (
    <h1 onClick={()=>{
      alert("H1 clicked");
    }} class="font-bold roboto-medium text-md sm:text-md md:text-4xl lg:text-4xl xl:text-4xl text-[#ff7e67] z-0 cursor-pointer">
      {text}
    </h1>
  );
};
