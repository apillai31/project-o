import { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import axios from 'axios';

interface ButtonProp {
    fileInputRef: React.MutableRefObject<HTMLInputElement>;
    display: string;
}

export function FileButton({fileInputRef, display}: ButtonProp) {

    //const inputRef = useRef(null)
    //useEffect(() => {
    //    function fileUploaded(this: HTMLInputElement) {
    //        //fileList: FileList = this.files;
    //        //if(FileList == null)
    //        //    return;
    //        if (this.files == null)
    //            return;
    //        var file = this.files[0];
    //        console.log(file)
    //    };

    //    const element: HTMLElement = inputRef.current!;

    //    if (element == null)
    //        return;
    //    element.addEventListener('change', fileUploaded);

    //    return () => {
    //        element.removeEventListener('change', fileUploaded);
    //    };

    //}, []);

    //const fileUpload = (e: ChangeEventHandler<HTMLInputElement>) => {
    //    e.preventDefault();
    //    if (e == null || e.target == null) return;
    //    var files = e.target.files,
    //        f = files[0];
    //    const formData = new FormData();
    //    formData.append("file", f);
    //    formData.append("filename", "upload.csv");
    //    console.log(formData.getAll)
    //    axios.post(API_url + "/upload/rawdata", formData, {
    //        headers: {
    //            "Content-Type": "multipart/form-data",
    //        },
    //    });
    //};

    const [fileUploadStatus, setFileUploadStatus] = useState("");
    
    async function fileReader(e: React.ChangeEvent<HTMLInputElement>) {
        if (e == null || e.target == null || e.target.files == null) {
            setFileUploadStatus("failed");
            return;
        }
        var file = e.target.files[0];
        //const formData = new FormData();
        //formData.append("file", file);
        //formData.append("filename", file.name);
        //console.log(formData.getAll)
        console.log(file.name)
        setFileUploadStatus(file.name);
        //try {
        //    await axios.post("http://localhost:5100" + "/run", formData, {
        //        headers: {
        //            "Content-Type": "multipart/form-data",
        //        },
        //        timeout: 2000
        //    });
        //    setFileUploadStatus(file.name);
        //}
        //catch(err) {
        //    setFileUploadStatus("Failed");
        //}
        const fr = new FileReader();
        fr.onload = (e) => {
            if (e == null || e.target == null)// || e.target.files == null)
                return;
            console.log(e.target.result);
        };
        fr.readAsText(file);
        console.log(fr.result);
    }

    return (
        <div>
            <Button
                component="label"
                //role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<FileUploadIcon />}
            >
                {display}
                {/* <input ref={inputRef} accept=".csv" type="file" hidden style={{ display: display }} /> */}
                <input ref={fileInputRef} onChange={fileReader} accept=".csv" type="file" hidden style={{ display: display }} />
            </Button>
            <p>{fileUploadStatus}</p>
        </div>
    )
}