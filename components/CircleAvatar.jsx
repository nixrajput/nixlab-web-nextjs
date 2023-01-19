import Image from "next/image"

const CircleAvatar = ({ avatar, gender, size = '40px', fit = 'cover' }) => {
    const style = {
        position: "relative",
        width: size,
        height: size,
        borderRadius: '50%',
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
                        borderRadius: '50%',
                    }}
                />
            </div>
        )
    }

    return (
        <div style={style}>
            <Image
                src={
                    String(gender).toLowerCase() === 'female' ?
                        '/female_avatar.svg' :
                        '/male_avatar.svg'
                }
                alt="avatar"
                priority
                fill
                sizes="100%"
                placeholder="blur"
                blurDataURL={String(gender).toLowerCase() === 'female' ?
                    '/female_avatar.svg' :
                    '/male_avatar.svg'}
                style={{
                    objectFit: fit,
                    borderRadius: '50%',
                }}
            />
        </div>
    )
}

export default CircleAvatar;