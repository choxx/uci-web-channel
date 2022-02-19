import { useRef, useEffect } from "react";
import "./index.css";
import { Box, Flex, Spacer } from "@chakra-ui/react";

const Message = ({
  text,
  username,
  self,
}: {
  text: any;
  username: string;
  self: boolean;
}) => {
  return (
    <Flex>
      {self === true && (
        <>
          <Spacer />
          <Box bg="green.600" w="80%">
            <div className="message-username">{username}</div>
            <div style={{ whiteSpace: "pre-wrap" }}>{text}</div>
          </Box>
        </>
      )}
      {!self === true && (
        <>
          <Box bg="gray.600" w="80%">
            <div className="message-username">{username}</div>
            <div style={{ whiteSpace: "pre-wrap" }}>{text}</div>
          </Box>
          <Spacer />
        </>
      )}
    </Flex>
  );
};

const MessageWindow = (props: any) => {
  let messageWindow: any = useRef(null);

  useEffect(() => {
    messageWindow = messageWindow.current;
    messageWindow.scrollTop =
      messageWindow.scrollHeight - messageWindow.clientHeight;
  }, [messageWindow]);

  const username: string = props.username;
  const messages: any = props.messages || [];
  console.log({ username, messages });

  return (
    <Box ref={messageWindow}>
      {messages.length > 0 &&
        messages.map((msg: any, i: number) => {
          return (
            <Message
              key={i}
              text={msg.text}
              username={msg.username}
              self={username === msg.username}
            />
          );
        })}
      <div>&nbsp;</div>
    </Box>
  );
};

export default MessageWindow;
