import MessageReply from "./message-reply.svg";

type IconProps = {
  className?: string;
};

export function MessageReplyIcon({ className }: IconProps) {
  return <MessageReply aria-hidden="true" className={className} />;
}
