import { useState } from "react";
import { useDispatch } from "react-redux";

interface Props {
    label: String
}

export default function ConnectWallet(props: Props) {
  let [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <></>
  )
}
