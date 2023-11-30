const AuthForm = () => {
  return (
    <>
      <button type="button">close</button>
      <p className={"mb-8 text-[30px]"}>Registration form</p>
      <form action="" className={"w-[100%]"}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          className={
            "block w-[100%] rounded-lg mb-8 outline-red-600 border-4 border-blue-700"
          }
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          className={
            "block w-[100%] rounded-lg mb-8 outline-red-600 border-4 border-blue-700"
          }
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AuthForm;
