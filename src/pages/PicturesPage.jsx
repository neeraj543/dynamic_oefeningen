/*
Here I use the data-array directly in the component PicturesPage.
What's the difference with PRODUCTS_DATA???
Note: the PICTURES_DATA array is not exported, so it will never be used in
another file.
The fact that this array is not passed as a prop makes it impossible
to reuse this PicturesPage Component for another array of pictures.
In this case I decided that that's just fine...
(it's a thin line...)
*/
const PICTURES_DATA = [
    {
        id: 1,
        credit: "https://unsplash.com/@acharki95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        author: "Aziz Acharki",
        name: "aziz-acharki-oEibQEiq2cM-unsplash.jpg"
    },
    {
        id: 2,
        credit: "https://unsplash.com/@acharki95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        author: "Aziz Acharki",
        name: "aziz-acharki-U3C79SeHa7k-unsplash.jpg"
    },
    {
        id: 3,
        credit: "https://unsplash.com/@yan_slg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        author: "Boudhayan Bardhan",
        name: "boudhayan-bardhan-jITjssEKv2E-unsplash.jpg"
    },
    {
        id: 4,
        credit: "https://unsplash.com/@mkaminski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        author: "Madison Kaminski",
        name: "madison-kaminski-3J_4c26cFpU-unsplash.jpg"
    },
];

export function PicturesPage() {
    return (
        <div>
            <h1 style={{ paddingLeft: "30px" }}>Picture Gallery</h1>
            <div style={{ padding: "0px 20px", display: 'flex',flexWrap: 'wrap',  justifyContent: 'flex-start'}}>
                {PICTURES_DATA.map((picture) => {
                    const { credit, author, name } = picture;

                    return (
                        <div key={picture.id} style={{ margin: "10px", textAlign: "start" }}>
                            <img
                                src={`images/${name}`}
                                alt={name}
                                width="350px"
                                style={{ height: "auto" }}
                            />
                            <div>
                                <a href={credit} target="_blank" rel="noopener noreferrer">
                                    {author}
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
