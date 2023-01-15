import Image from "next/image"

const Avatar = ({ avatar, width = "40px", height = '40px', fit = 'cover' }) => {
    const style = {
        position: "relative",
        width: width,
        height: height,
        objectFit: fit,
    }

    if (avatar && avatar.url) {
        return (
            <div style={style}>
                <Image
                    src={avatar.url}
                    alt="avatar"
                    priority
                    fill
                    sizes="100%"
                    placeholder="blur"
                    blurDataURL={avatar.url}
                    style={{
                        objectFit: fit,
                    }}
                />
            </div>
        )
    }

    return (
        <div style={style}>
            <Image
                src={'../../avatar.png'}
                alt="avatar"
                priority
                fill
                sizes="100%"
                placeholder="blur"
                blurDataURL={'../../avatar.png'}
                style={{
                    objectFit: fit,
                }}
            />
        </div>
    )
}

export default Avatar;