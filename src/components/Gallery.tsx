import React, { useState, useRef, useEffect } from "react";
import Help from "../icons/Help";
import Grid from "../icons/Grid";
import Plus from "../icons/Plus";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";


function Gallery() {
    const imageFiles = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}', { as: 'url' });
    const [imagesList, setImagesList] = useState<string[]>([]);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const loadImages = async () => {
            const imageUrls = await Promise.all(
                Object.values(imageFiles).map((importImage) => importImage())
            );
            setImagesList(imageUrls as string[]);
        };

        loadImages();
    }, []);

    const handleAddImage = (newImage: string): void => {
        setImagesList((prevImages) => [...prevImages, newImage]);
    };

    const handleScrollLeft = (): void => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 100;
        }
    };

    const handleScrollRight = (): void => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 100;
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files?.[0];
    
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    handleAddImage(reader.result.toString());
                }
            };
            reader.readAsDataURL(file);
        }
    };    

    const handleImageClick = (image: string) => {
        window.open(image, '_blank');
    };

    const openFileExplorer = (): void => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <section className="flex justify-center h-full w-full rounded-[18.89px] max-w-[720px] max-h-[350px] px-3 py-5 bg-[#363C43] card-drop-shadow pr-[49px] ">
            <div className="h-[60%] flex flex-col justify-between pr-4">
                <button>
                    <Help />
                </button>
                <button>
                    <Grid />
                </button>
            </div>
            <div className="w-full h-full">
                <div className="flex justify-between items-center">
                    <button className="flex bg-[#171717] text-white gallery-btn-drop-shadow rounded-[20px] text-[20px] h-[62px] w-[149px] justify-center items-center">
                        Gallery
                    </button>
                    <div className="flex gap-[35px]">
                        <div>
                            <button
                                className="w-[131.32px] h-[46px] add-btn-drop-shadow rounded-[104px] text-[12px] uppercase text-white flex justify-center items-center gap-1"
                                onClick={openFileExplorer}
                            >
                                <Plus />
                                Add Image
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: "none" }}
                            />
                        </div>
                        <div className="flex gap-[18px]">
                            <button
                                onClick={handleScrollLeft}
                                className="w-[45px] h-[45px] arrow-btn-drop-shadow rounded-full flex justify-center items-center bg-gradient-to-br from-[#303439] to-[#161718]"
                            >
                                <ArrowLeft />
                            </button>
                            <button
                                onClick={handleScrollRight}
                                className="w-[45px] h-[45px] arrow-btn-drop-shadow rounded-full flex justify-center items-center bg-gradient-to-br from-[#303439] to-[#161718]"
                            >
                                <ArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="h-[200px] overflow-hidden relative mt-[35px]">
                    <div
                        className="relative flex h-[190px] flex-col overflow-x-auto overflow-y-hidden custom-scrollbar"
                        ref={scrollRef} >
                        <div className="flex">
                            {imagesList.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    onClick={() => handleImageClick(image)}
                                    alt={`Image ${index + 1}`}
                                    className="m-2 w-[190px] h-[179px] rounded-3xl object-cover flex-shrink-0 grayscale cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
