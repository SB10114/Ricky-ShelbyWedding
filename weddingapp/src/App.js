import "./App.css";
import ImageGallery from "react-image-gallery";
import img1 from "./RS pics/img1.jpg";
import img2 from "./RS pics/img2.jpg";
import img3 from "./RS pics/img3.jpg";
import img4 from "./RS pics/img4.jpg";
import img5 from "./RS pics/img5.jpg";

const images = [
  {
    original: img1,
    thumbnail: img1,
    thumbnailHeight: 100,
  },
  {
    original: img2,
    thumbnail: img2,
    thumbnailHeight: 100,
  },
  {
    original: img3,
    thumbnail: img3,
    thumbnailHeight: 100,
  },
  {
    original: img4,
    thumbnail: img4,
    thumbnailHeight: 100,
  },
  {
    original: img5,
    thumbnail: img5,
    thumbnailHeight: 100,
  },
];

function App() {
  return (
    <div className="App">
      <div className="topnav">
        <a target="_blank" href="https://www.theestesparkresort.com/">
          Guest Accommodations
        </a>
        <a
          target="_blank"
          href="https://www.honeyfund.com/site/MrandMrsMondragon2023?no_gdpr=1"
        >
          Honey Fund
        </a>
      </div>
      <div //header
          style={{
            marginLeft: 120,
            maxWidth: "30vw",
          }}
        >
          <h1>Welcome to Ricky and Shelby's wedding website</h1>
        </div>

      <div
        style={{
          //gallery placement
          display: "flex",
          justifyContent: "space-around",
        }}
      >
         <div className="faqs">
        <h3>FAQ'S</h3>
        <details>
          <summary>Dress code</summary>
          <p>
            For the rehearsal we ask that you show up wearing business casual.
            For the Wedding proper we're asking for you to wear formal attire.
          </p>
        </details>
        <details>
          <summary>Bar rules</summary>
          <p>We will provide open bar up to $1,500 total for the event.</p>
        </details>
        <details>
          <summary>Gifts</summary>
          <p>
            Instead of gifts we ask that you donate to our Honey fund. See the
            tab at the top of the website.
          </p>
        </details>
        <details>
          <summary>Guests</summary>
          <p>
            We can only provide food and drink accommodations for guests noted
            on your invitation as your plus 1's
          </p>
        </details>
        <details>
          <summary>Photogrophers</summary>
          <p>
            Please no photos to be taken during the ceremony unless by the paid
            photographers
          </p>
        </details>
      </div>
    

        <div //image gallery
          style={{
            width: "50vw",
            border: 50,

          }}
        >
          <ImageGallery items={images} />
        </div>
      </div>

    </div>
  );
}

export default App;
