import ctl from "@netlify/classnames-template-literals";
const imageStyle = ctl(`
  w-full 
  h-[334px]
  lg:h-auto
`);

const gridWrapper = ctl(`
basis-1/2
grid
grid-cols-6
m-0
transition-all ease-out duration-500
gap-4
`);

const imgClassWrapper1 = ctl(`
col-start-1
col-end-7
`);

const imgClassWrapper2 = ctl(`
col-start-1 
col-end-3
`);
const imgClassWrapper2b = ctl(`
col-span-2
col-end-7
`);

const imgClassWrapper3 = ctl(`
col-end-7 
col-span-4 
shadow-md 
rounded-md
`);
const imgClassWrapper3b = ctl(`
col-end-5 
col-start-1 
shadow-md 
rounded-md
`);
const imgClass = ctl(`
scroll-smooth
shadow-md 
rounded-md 
w-full transition-all
duration-500
h-full
`);

export {
  imgClass,
  imageStyle,
  imgClassWrapper1,
  imgClassWrapper2,
  imgClassWrapper2b,
  imgClassWrapper3,
  imgClassWrapper3b,
  gridWrapper,
};
