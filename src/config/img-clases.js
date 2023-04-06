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

const imgClassWrapper3 = ctl(`
col-end-7 
col-span-4 
shadow-md 
rounded-md
`);

const imgClass = ctl(`
scroll-smooth
shadow-md 
rounded-md 
w-full 
h-full
`);

export {
  imgClass,
  imageStyle,
  imgClassWrapper1,
  imgClassWrapper2,
  imgClassWrapper3,
  gridWrapper,
};
