## Return next smallest palindrome of a given number num.

def next_smallest_palindrome(n):
    size = len(n)
    odd = size % 2

    if odd:
        center = n[size/2]
    else:
        center = ''

    left = n[:size/2]
    right = ''.join(reversed(left))

    palindrome = left + center + right

    if palindrome > n:
        print(palindrome)
    else:
        if center:
            if center < '9' and left:
                center = str(int(center) + 1)
                paliCenterLessThanNine = left + center + right
                print(paliCenterLessThanNine)
            else:
                center = '0'

        if left == len(left)*'9' and paliCenterLessThanNine < n:
            print('1' + (len(n)-1)*'0' + '1')  # 99, 101
        else:
            left = inc(left)
            print(left + center + left[::-1])


def inc(left):
    leftlist = list(left)
    last = len(left) - 1
    while leftlist[last] == '9':
        leftlist[last] = '0'
        last -= 1
    leftlist[last] = str(int(leftlist[last])+1)

    return ''.join(leftlist)


next_smallest_palindrome("22")
