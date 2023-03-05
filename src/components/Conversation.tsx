import React from "react";

interface ConversationProps {
  conversation: { isBot: boolean; text: string }[];
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function Conversation(props: ConversationProps): JSX.Element {
  return (
    <div>
      <div style={{ height: "400px", overflowY: "scroll" }}>
        {props.conversation.map((item, index) => (
          <div
            key={index}
            style={{ margin: "10px", textAlign: item.isBot ? "left" : "right" }}
          >
            <div
              style={{
                backgroundColor: item.isBot ? "#f0f0f0" : "#0066ff",
                color: item.isBot ? "#000000" : "#ffffff",
                borderRadius: "5px",
                padding: "10px",
                display: "inline-block",
                maxWidth: "75%",
              }}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={props.handleSubmit}>
        <input type="text" name="input" placeholder="Type here..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
