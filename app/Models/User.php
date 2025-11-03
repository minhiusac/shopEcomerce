<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable; // dùng cho Auth
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    // Bảng tương ứng trong MySQL
    protected $table = 'users';

    // Các cột có thể ghi (fillable)
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'phone',
        'created_at',
        'updated_at'
    ];

    // Ẩn các trường khi trả về JSON (vd: không show password)
    protected $hidden = [
        'password',
        'remember_token',
    ];

    // Tự động hash mật khẩu khi gán giá trị
    public function setPasswordAttribute($value)
    {
        // Nếu chuỗi chưa mã hoá (không bắt đầu bằng $2y$ thì hash)
        if (!empty($value) && !str_starts_with($value, '$2y$')) {
            $this->attributes['password'] = Hash::make($value);
        } else {
            $this->attributes['password'] = $value;
        }
    }

    // Các quan hệ (1 user có nhiều địa chỉ, giỏ hàng, đơn hàng)
    public function addresses()
    {
        return $this->hasMany(Address::class, 'user_id');
    }

    public function carts()
    {
        return $this->hasMany(Cart::class, 'user_id');
    }

    public function orders()
    {
        return $this->hasMany(Order::class, 'user_id');
    }
}
