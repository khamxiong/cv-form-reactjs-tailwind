import React, { useState } from "react";
import { Formik } from "formik";
import { FiUpload } from "react-icons/fi";
import { LaoAddress } from "../../helps/laoAddress";
import PopupCv from "./PopupCv";

const AddForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectDistrict, setSelectDistrict] = useState();
  const [userInfo, setUserInfo] = useState();
  const [showPopUp,setShowPopUp] = useState(false);
  // states for checking errors
  const [errorName, setErrorName] = useState(false);
  const [errorLastName, setErrorLastName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorProvince, setErrorProvince] = useState(false);
  const [errorDistrict, setErrorDistrict] = useState(false);
  const [errorVillage, setErrorVillage] = useState(false);

  const handleImageSelect = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (values) =>{
      setShowPopUp(true)
      if(values){
         const data  = {
          profile:selectedImage,
          name:values.name,
          lastName:values.lastName,
          email:values.email,
          phoneNumber:values.phoneNumber,
          village: values.village,
          district: values.district,
          province: values.province,
          description:values.description,
         }
         setUserInfo(data);
      }
  }
  return (
    <> 
      {showPopUp && <PopupCv datas={userInfo} showPopUp={showPopUp} setShowPopUp = {setShowPopUp} />}
      <div className=" w-full md:w-[80%] p-3 rounded-md  mx-auto min-h-screen grid place-items-center">
        <div className=" flex gap-2 bg-slate-300 p-3  md:flex-row flex-col">
          <div className=" bg-white p-4 rounded-md w-full md:w-[40%] min-h-[20rem] self-start text-center">
            <h3 className=" font-medium text-lg">ຮູບພາບໂປຣໄຟ</h3>
            {selectedImage ? (
              <img
                src={selectedImage}
                className=" h-[10rem] w-[10rem] rounded-full mx-auto border border-blue-500 object-cover"
              />
            ) : (
              <div className="relative border-dashed border-2 border-gray-300 p-6 mx-auto mt-3 h-[10rem] w-[10rem] rounded-full">
                <div className="text-center flex flex-col items-center">
                  <FiUpload size={35} />
                  <h2 className="mt-2 text-sm font-medium text-gray-900">
                    ເລືອກຮູບພາບ
                  </h2>
                  <p className="mt-1 text-xs text-gray-500">PNG, JPG</p>
                </div>
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleImageSelect}
                />
              </div>
            )}
           {selectedImage &&  <button onClick={() => setSelectedImage(null)}
            className=" mt-6 rounded-md border-2 border-blue-600 hover:bg-blue-600 hover:text-white duration-300 px-4 py-2" >ຍົກເລີກຮູບ</button>}
          </div>
          <Formik
            initialValues={{
              name: "",
              lastName: "",
              phoneNumber: "",
              email: "",
              village: "",
              district: "",
              province: "",
              description:""
            }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = "ກະລຸນາປ້ອມຊື່";
                setErrorName(true);
              }
              if (values.name) {
                setErrorName(false);
              }
              if (!values.lastName) {
                errors.lastName = "ກະລຸນາປ້ອມນາມສະກຸນ";
                setErrorLastName(true);
              }
              if (values.lastName) {
                setErrorLastName(false);
              }
              if (!values.email) {
                setErrorEmail(false);
                errors.email = "ກະລຸນາປ້ອມອິມິວ"
              }
              if (values.email) {
                setErrorEmail(false);
              }
              if (!values.phoneNumber) {
                setErrorPhone(false);
                errors.phoneNumber = "ກະລຸນາປ້ອມເບີໂທ"
              }
              if (values.phoneNumber) {
                setErrorPhone(false);
              }
              if (!values.province) {
                errors.province = "ກະລຸນາເລືອກແຂວງ";
                setErrorProvince(true);
              }
              if (values.province) {
                setErrorProvince(false);
              }
              if (!values.district) {
                errors.district = "ກະລຸນາເລືອກເມື່ອງ";
                setErrorDistrict(true);
              }
              if (values.district) {
                setErrorDistrict(false);
              }
              if (!values.village) {
                errors.village = "ກະລຸນາປ້ອມບ້ານ";
                setErrorVillage(true);
              }
              if (values.village) {
                setErrorVillage(false);
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
               handleSubmit(values)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              handleBlur,
            }) => (
              <form className=" border-2 border-gray-200 rounded-md w-full p-3">
                <h3 className=" font-medium text-2xl">ປ້ອມຂໍ້ມູນ</h3>
                <div className=" mt-3">
                  <div className="mb-4 flex gap-2 justify-between items-center">
                    <div className=" w-full md:w-1/2">
                      <label>ຊື່</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="ຫຼ້ານ້ອຍ"
                        className={` ${
                          errorName ? "border-red-600" : "border-gray-400"
                        } border-gray-400 border-2 rounded-md w-full  p-3 text-gray-700 focus:outline-none focus:border-2`}
                      />
                      <p className="text-red-500 text-sm">
                        {" "}
                        {errors.name && touched.name && errors.name}
                      </p>
                    </div>
                    <div className=" w-full md:w-1/2">
                      <label>ນາມສະກຸນ</label>
                      <input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="ໄຊຍະວົງ"
                        className={` ${
                          errorLastName ? "border-red-600" : "border-gray-400"
                        } border-gray-400 border-2 rounded-md w-full  p-3 text-gray-700 focus:outline-none focus:border-2`}
                      />
                      <p className="text-red-500 text-sm">
                        {errors.lastName && touched.lastName && errors.lastName}
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 flex gap-2 justify-between items-center">
                    <div className=" md:w-1/2 w-full">
                      <label>ອິມິວ</label>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="LakNoy@gmail.com"
                        className={` ${
                          errorEmail ? "border-red-600" : "border-gray-400"
                        } border-gray-400 border-2 rounded-md w-full  p-3 text-gray-700 focus:outline-none focus:border-2`}
                      />
                       <p className="text-red-500 text-sm">
                        {errors.email && touched.email && errors.email}
                      </p>
                    </div>
                    <div className="md:w-1/2 w-full">
                      <label>ເບີໂທ</label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="78812645"
                        className={` ${
                          errorPhone ? "border-red-600" : "border-gray-400"
                        } border-gray-400 border-2 rounded-md w-full  p-3 text-gray-700 focus:outline-none focus:border-2`}
                      />
                      <p className="text-red-500 text-sm">
                        {errors.phoneNumber &&
                          touched.phoneNumber &&
                          errors.phoneNumber}
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 flex gap-2 items-center justify-between ">
                    <div className="mb-2  w-full md:w1/3">
                      <label className="font-medium text-base">ແຂວງ</label>
                      <select
                        name="province"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.province}
                        className={`${
                          errorProvince ? "border-red-600" : "border-gray-400"
                        } border-2 border-gray-400 text-base p-3 rounded-md outline-none w-full`}
                      >
                        <option value="" className="">
                          --ເລືອກແຂວງ--
                        </option>
                        {LaoAddress.map((p, index) => (
                          <option
                            key={"province" + index}
                            value={p?.province_name}
                          >
                            {p?.province_name}
                          </option>
                        ))}
                      </select>
                      <p className="text-red-500">
                        {errors.province && touched.province && errors.province}
                      </p>
                    </div>
                    <div className="mb-2 flex flex-col  w-full md:w1/3">
                      <label className="font-medium text-base">ເມື່ອງ</label>
                      <select
                        name="district"
                        disabled={!values.province}
                        onBlur={handleBlur}
                        value={selectDistrict}
                        onChange={handleChange}
                        className={`${
                          errorDistrict ? "border-red-600" : "border-gray-400"
                        } border-2 border-gray-400  text-base p-3 rounded-md outline-none`}
                      >
                        <option value="">---ເລືອກເມືອງ--- </option>
                        {values.province &&
                          LaoAddress.filter(
                            (filter) => filter.province_name === values.province
                          )[0].district_list.map((p, index) => (
                            <option
                              key={"district" + index}
                              value={p?.district}
                            >
                              {p?.district}
                            </option>
                          ))}
                      </select>
                      <p className="text-red-500">
                        {errors.district && touched.district && errors.district}
                      </p>
                    </div>
                    <div className="mb-2 w-full md:w1/3">
                      <label className="text-base font-medium">ບ້ານ</label>
                      <input
                      disabled ={!values.province && !values.district}
                        type="text"
                        name="village"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="ປ້ອມບ້ານ"
                        className={` ${
                          errorVillage ? "border-red-600" : "border-gray-400"
                        } border-gray-400 border-2 rounded-md w-full  p-[0.8rem] text-gray-700 focus:outline-none focus:border-2`}
                      />
                      <p className="text-red-500">
                        {errors.village && touched.village && errors.village}
                      </p>
                    </div>
                  </div>
                  <div className=" mb-4 flex flex-col gap-2">
                      <label htmlFor="">ລາຍລະອຽດ (description)</label>
                      <textarea onBlur={handleBlur} onChange ={handleChange} 
                      name="description" placeholder="write something..." className=" p-2 border-gray-400 border-2 rounded-md w-full"/>
                  </div>
                  <div className=" mt-2 w-full text-center">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className=" p-4 rounded-md bg-blue-400 text-white min-w-[10rem] hover:bg-blue-500 duration-200 active:scale-95 hover:shadow-md"
                    >
                      ສົງຂໍ້ມູນ
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddForm;
