for f in /assets/img/*.txt; do
    mv -- "$f" "${f%.txt}.text"
done
