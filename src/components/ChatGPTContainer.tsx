import React, { useState, useEffect } from "react";
import Conversation from "./Conversation";
import useLocalStorageState from "../hooks/use-local-storage";
import { vans } from "../mock-data";

interface OpenAIContainerProps {}

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

function OpenAIContainer(props: OpenAIContainerProps): JSX.Element {
  const [conversation, setConversation] = useLocalStorageState<Message[]>(
    "conversation",
    [
      {
        role: "system",
        content: `You are a Friendly Assistant Van Retail Chatbot who is trying to assist the sale of vans. Van Inventory: ${JSON.stringify(
          vans
        )}`,
      },
    ]
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function handleInput(inputText: string): Promise<void> {
      setIsLoading(true);
      console.log({ conversation });
      const response = await fetch("http://localhost:8000/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          context: conversation,
        }),
      });

      const responseJson = await response.text();
      console.log(responseJson);
      const responseText = responseJson;
      const responseMessage: Message = {
        role: "assistant",
        content: responseText,
      };

      setIsLoading(false);
      setConversation([...conversation, responseMessage]);
    }

    if (conversation.length > 0) {
      const lastMessage = conversation[conversation.length - 1];
      if (lastMessage.role === "user") {
        handleInput(lastMessage.content);
      }
    }
  }, [conversation]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const inputText: string | undefined = (
      Array.from(event.currentTarget.elements) as HTMLInputElement[]
    )
      .find((element) => element.name === "input")
      ?.value?.trim();
    if (!inputText) return;

    setConversation([...conversation, { role: "user", content: inputText }]);
    event.currentTarget.reset();
  }

  return (
    <Conversation
      conversation={conversation}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
    />
  );
}

export default OpenAIContainer;
