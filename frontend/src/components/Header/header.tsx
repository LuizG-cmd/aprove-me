import Image from "next/image"

export const Header = () =>{
    return (
        <div className="max-h-auto flex flex-row justify-between">
            <div>
                <a href="">
                    <Image src='./' width={50} height={50}></Image>
                </a>
            </div>
            <div>
                <a href="">Teste</a>
            </div>
            <div>
                <a href="">Teste</a>
            </div>
        </div>
    )
}