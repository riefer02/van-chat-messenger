import React from "react";

interface Message {
  role: string;
  content: string;
}

interface ConversationProps {
  conversation: Message[];
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isLoading: Boolean;
}

export default function Conversation(props: ConversationProps): JSX.Element {
  return (
    <div>
      <div
        style={{
          height: "400px",
          overflowY: "scroll",
          backgroundColor: "white",
          borderRadius: "5px",
        }}
        className="mb-2"
      >
        {props.conversation.map((message, index) => {
          if (message.role === "system") return;

          return (
            <div
              key={index}
              style={{
                margin: "10px",
                textAlign: message.role === "assistant" ? "left" : "right",
              }}
            >
              <div
                style={{
                  backgroundColor:
                    message.role === "assistant" ? "#f0f0f0" : "#0066ff",
                  color: message.role === "assistant" ? "#000000" : "#ffffff",
                  borderRadius: "5px",
                  padding: "10px",
                  display: "inline-block",
                  maxWidth: "75%",
                  textAlign: "left",
                }}
              >
                {message.content}
              </div>
            </div>
          );
        })}
      </div>
      <form onSubmit={props.handleSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="input"
          placeholder="Type here..."
          style={{
            flex: "1",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            marginRight: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#0066ff",
            color: "#ffffff",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
