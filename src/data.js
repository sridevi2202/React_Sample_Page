import componentimg from "./assets/components.png";
import configimg from "./assets/config.png";
import jsxuiimg from "./assets/jsx-ui.png";
import statemgmtimg from "./assets/state-mgmt.png";

export const data = [
  {
    title: "Components",
    img: componentimg,
    des: "The Core UI building block",
  },
  {
    title: "JSX",
    img: jsxuiimg,
    des: "Return (potentially dynamic) HTML(ish) code",
  },
  {
    title: "Props",
    img: configimg,
    des: "Make Components Configurable",
  } /*,
  {
    title: "State",
    img: statemgmtimg,
    des: "React managed data which when changed causes the component",
  },*/,
];

export const Examples = {
  Component: {
    title: "Components",
    des: "components are the building blocks of React application",
    code: `
    <div>
      <h1>Welcome {userName}</h1>
      <p>Time to learn React!</p>
    </div>
  `,
  },
  JSX: {
    title: "JSX",
    des: "JSX is a syntax extension to Java Script",
    code: `
    <div> 
    <h1>Welcome {userName}</h1> 
    <p>Time to learn React!</p>  
    </div>
    `,
  },
  Props: {
    title: "Props",
    des: "Components accept arbitary inputs called props.",
    code: `
    function Welcome(props)
    {
      return(
        <h1>Hello, {props.name}</h1>
      );
    }
    `,
  },
  State: {
    title: "State",
    des: "State allows React component to change their output overtime",
    code: `
    function Counter()
    {
     const [price,setPrice]=useState(100);
     setPrice(75);
    }
    `,
  },
};
