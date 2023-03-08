import React, { useState } from "react";
import Conversation from "./Conversation";
import useLocalStorageState from "../hooks/use-local-storage";

interface OpenAIContainerProps {}

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

function OpenAIContainer(props: OpenAIContainerProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useLocalStorageState<Message[]>(
    "conversation",
    []
  );

  async function handleInput(inputText: string): Promise<void> {
    const response = await fetch("http://localhost:8000/openai", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        context:
          conversation.map((item: Message) => item.content).join("\n") +
          (conversation.length ? "\n" : "") +
          inputText,
      }),
    });

    const responseText = await response.text();
    const responseItem: Message = {
      role: "assistant",
      content: responseText,
    };

    setConversation([
      ...conversation,
      { content: inputText, role: "assistant" },
      responseItem,
    ]);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const inputText: string | undefined = (
      Array.from(event.currentTarget.elements) as HTMLInputElement[]
    )
      .find((element) => element.name === "input")
      ?.value?.trim();
    if (!inputText) return;

    setConversation([...conversation, { content: inputText, role: "user" }]);
    handleInput(inputText);
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
