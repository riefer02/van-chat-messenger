import React from "react";
import Conversation from "./Conversation";
import useLocalStorageState from "../hooks/use-local-storage";

interface OpenAIContainerProps {}

interface ConversationItem {
  isBot: boolean;
  text: string;
}

function OpenAIContainer(props: OpenAIContainerProps): JSX.Element {
  const [conversation, setConversation] = useLocalStorageState<
    ConversationItem[]
  >("conversation", []);

  async function handleInput(inputText: string): Promise<void> {
    const response = await fetch("http://localhost:8000/openai", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        context:
          conversation.map((item: ConversationItem) => item.text).join("\n") +
          (conversation.length ? "\n" : "") +
          inputText,
      }),
    });
    console.log({ response });

    const responseText = await response.text();
    const responseItem: ConversationItem = {
      isBot: true,
      text: responseText,
    };

    setConversation([
      ...conversation,
      { text: inputText, isBot: false },
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

    setConversation([...conversation, { text: inputText, isBot: false }]);
    handleInput(inputText);
    event.currentTarget.reset();
  }

  return (
    <Conversation conversation={conversation} handleSubmit={handleSubmit} />
  );
}

export default OpenAIContainer;
