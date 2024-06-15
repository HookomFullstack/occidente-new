
export const loader = ( timeLoader, navigate, urlToNavigate ) => {
    setTimeout(() => urlToNavigate?.includes('https://') ? window.location.href = urlToNavigate : navigate(`${urlToNavigate}`) , timeLoader)
}
