"use client";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn, useSession } from "next-auth/react";

export default function Like({ mediaId }) {
  const { data: session } = useSession();
  const handleLikeClicked = (e) => {
    e.preventDefault();
    if (!session) {
      signIn();
    }
    fetch(`/api/like/${mediaId}`, {
      method: "POST",
    });
  };
  return (
    <div
      className="text-secondary absolute top-0 right-0 z-10"
      onClick={handleLikeClicked}
    >
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
}
