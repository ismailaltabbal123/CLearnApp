import {
    vs,
    vs2015,
    arta,
  } from "react-syntax-highlighter/dist/cjs/styles/hljs";
  import CodeBlock from "./CodeBlock";
  import Titel from "./titel";
  import Space from './space';
  
  const code = `helm install --set-string long_int=1234567890 myredis ./redis
  `;
  
  
  
  export default function App({codebloke, result}) {
      const typescriptCode = `${codebloke}`;
    return (
      <div className="App">
        {/* <CodeBlock style={vs} code={code} language={'bash'} /> */}
        {/* <br /> */}
        {/* <br /> */}
        <Space/>
        <Titel titel={'الكود:'}/>
        <CodeBlock style={vs2015} code={typescriptCode} language={'c'} />
        <Space/>
        <Space/>
      </div>
    );
  }