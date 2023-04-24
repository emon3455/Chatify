import Img from "../img/img.png"
import Attatch from "../img/attach.png"

const Input = () => {
    return (
        <div className="input">

            <input type="text" placeholder="Type Something...." />

            <div className="send">
                <img src={Attatch} alt="" />
                <input type="file" style={{display: "none"}} name="file" id="file" />
                <label htmlFor="file">
                    <img src={Img} alt="" />
                </label>
                <button>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Input;