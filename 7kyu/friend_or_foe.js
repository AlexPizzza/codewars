function friend(friends) {
  const FRIEND_NAME_LENGTH = 4;
  return friends.filter(
    (friend_name) => friend_name.length === FRIEND_NAME_LENGTH
  );
}
