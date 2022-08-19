import React from "react";
import CardBlog from "../common/cardBlog";
export default function CardBlogLayout() {
  return (
    <div>
      <CardBlog
        id={0}
        image={
          "https://www.google.com/search?q=gripe&rlz=1C1ONGR_esVE989VE989&sxsrf=ALiCzsb993XPRgFsgkvbT6E5-iyQXhKa6g:1660930397433&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjAldfyt9P5AhVFbTABHYcVBMYQ_AUoAXoECAEQAw&biw=1309&bih=636&dpr=1.1#imgrc=0EI6Rhqj0ogjLM"
        }
        title={"gripa"}
        intro={"intro gripe"}
        author={{ first_name: "María", last_name: "Martinez" }}
        created_at={"01/02"}
      />
    </div>
  );
}
