import { useRef } from "react";
import { db, storage } from "../shared/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

const Storage = () => {
  // Ref
  const file_link_ref = useRef();

  // 업로드, 다운로드 로직
  const onChangeUploadFile = async (e) => {
    // 업로드 파일
    const storageRef = ref(storage, `images/${e.target.files[0].name}`);

    const uploaded_file = await uploadBytes(storageRef, e.target.files[0]);
    console.log("uploaded_file: ", uploaded_file);

    // 다운로드 URL
    const file_url = await getDownloadURL(uploaded_file.ref);
    console.log("file_url: ", file_url);

    // 유저 정보 저장하기
    file_link_ref.current = { url: file_url }; // ref를 element랑 꼭 같이 사용할 필요 없음
    console.log("file_link_ref.current: ", file_link_ref.current);

    await addDoc(collection(db, "images"), {
      image_url: file_link_ref?.current.url,
    });
  };

  return (
    <>
      <div>Storage</div>
      이미지 : <input type="file" onChange={onChangeUploadFile} /> <br />
      <img
        alt="king"
        src="https://firebasestorage.googleapis.com/v0/b/sparta-react-511ce.appspot.com/o/images%2Fking.webp?alt=media&token=06aaec58-d0c0-49b9-a85f-f0b695b73be2"
        style={{ border: "solid black 1px", width: "100px", height: "100px" }}
      />
    </>
  );
};

export default Storage;
