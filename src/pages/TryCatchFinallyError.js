const TryCatchFinallyError = () => {
  const data = { name: "Kidongg", age: 22 };

  try {
    // 코드 실행
    const kidongg_age = data.age;
    console.log("kidongg_age: ", kidongg_age);

    // custom error
    if (data.age !== 28) {
      const age_error = new Error("기동이 나이가 틀렸어요");
      throw age_error;
    }
  } catch (err) {
    // try문에서 에러가 났을 경우 실행
    console.log(err);
    console.log("typeof err: ", typeof err);
  } finally {
    // try문에서 오류가 나든 말든 무조건 실행
    console.log("나 무조건 찍히니?");
  }

  return <div>TryCatchFinallyError</div>;
};

export default TryCatchFinallyError;
